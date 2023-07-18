
export class Deal {
  id: string;
  dealName: string;
  company: string;
  category: string;
  probability: string;
  forecastDate: string;
  actualDate: string;
  user: string;
  dealValue: string;
  bidAmt: string;
  fixBid: string;
  description: string;
  pipelines: string;
  stage: string;

  constructor(deal: any) {
    {
      this.id = deal.id || '00000000-0000-0000-0000-000000000000';
      this.dealName = deal.dealName || '';
      this.company = deal.company || '';
      this.category = deal.category || '';
      this.probability = deal.probability || '';
      this.forecastDate = deal.forecastDate || '';
      this.actualDate = deal.actualDate || '';
      this.user = deal.user || '';
      this.dealValue = deal.dealValue || '';
      this.bidAmt = deal.bidAmt || '';
      this.fixBid = deal.fixBid || '';
      this.pipelines = deal.pipelines || '';
      this.stage = deal.stage || '';
      this.description = deal.description || '';


    }
  }

}
