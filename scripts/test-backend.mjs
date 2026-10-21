import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
function run(command, args) {
  const result = spawnSync(command, args, { cwd: root, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
}

// The captured sendmail test needs POSIX shell semantics. Keep Windows PHP and
// Python untouched, and use the same Linux contract inside a disposable container.
if (process.platform !== 'win32' &&
    spawnSync('php', ['--version']).status === 0 &&
    spawnSync('python3', ['--version']).status === 0) {
  run('php', ['-l', 'public/inaya-enquiry.php']);
  run('python3', ['tests/form-delivery-backend.py']);
} else {
  if (spawnSync('docker', ['info'], { stdio: 'ignore' }).status !== 0) {
    throw new Error('Start the installed Docker engine, then rerun npm run test:backend. No global PHP/Python installation is needed.');
  }
  const image = 'inaya-domestic-backend-qa:php84';
  run('docker', ['build', '--pull', '--tag', image, 'tools/backend-qa']);
  run('docker', ['run', '--rm', '--network', 'none', '--read-only',
    '--tmpfs', '/tmp:rw,nosuid,nodev,size=64m', '--cap-drop', 'ALL',
    '--security-opt', 'no-new-privileges',
    '--mount', `type=bind,source=${root},target=/workspace,readonly`, image,
    'sh', '-c', 'php -l public/inaya-enquiry.php && python3 tests/form-delivery-backend.py']);
}
