import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function FormTranslations({ children, namespaces }: { children: React.ReactNode; namespaces: string[] }) {
  const messages = await getMessages();
  const selected = Object.fromEntries(namespaces.map((key) => [key, messages[key]]));
  return <NextIntlClientProvider messages={selected}>{children}</NextIntlClientProvider>;
}
