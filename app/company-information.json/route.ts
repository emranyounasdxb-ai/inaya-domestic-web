import { companyInformationRecord } from '@/lib/company-information';

export const dynamic = 'force-static';

export function GET() {
  return Response.json(companyInformationRecord());
}
