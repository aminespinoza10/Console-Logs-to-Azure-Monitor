import { AzureMonitorTraceExporter } from '@azure/monitor-opentelemetry-exporter';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { Resource } from '@opentelemetry/resources';
import { ResourceAttributes } from '@opentelemetry/semantic-conventions';

const provider = new NodeTracerProvider({
    resource: new Resource({
      [ResourceAttributes.SERVICE_NAME]: 'my-service',
    }),
  });
  
  provider.addSpanProcessor(new SimpleSpanProcessor(new AzureMonitorTraceExporter({
    instrumentationKey: 'YOUR_INSTRUMENTATION_KEY',
  })));
  
  provider.register();
  
  const logger = provider.getLogger('example');
  logger.error('This is an error message.');
  
  console.error('This is a console error message.');