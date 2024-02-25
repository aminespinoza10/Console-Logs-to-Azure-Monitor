import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const appInsights = new ApplicationInsights({ config: {
  connectionString: 'InstrumentationKey=23ecbfe6-454f-4119-85df-8fb68b11b2b1;IngestionEndpoint=https://eastus2-3.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus2.livediagnostics.monitor.azure.com/'
} });


appInsights.loadAppInsights();
appInsights.trackPageView();

console.error('This is a console error message.');

console.log('This is a log message')

console.info('This is some information') 

console.error('This is an error')

console.warn('This is a warning') 