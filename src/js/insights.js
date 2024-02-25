import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const appInsights = new ApplicationInsights({ config: {
  connectionString: 'App Insights connection string here',
} });


appInsights.loadAppInsights();
appInsights.trackPageView();

console.error('This is a console error message.');

console.log('This is a log message')

console.info('This is some information') 

console.error('This is an error')

console.warn('This is a warning') 