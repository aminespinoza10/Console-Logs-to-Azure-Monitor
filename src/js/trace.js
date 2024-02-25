import {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-base';
import { AzureMonitorTraceExporter, AzureMonitorLogExporter, } from '@azure/monitor-opentelemetry-exporter';
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
const { logs } = require("@opentelemetry/api-logs");
const { LoggerProvider, BatchLogRecordProcessor } = require("@opentelemetry/sdk-logs");

const provider = new WebTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

provider.register({
  contextManager: new ZoneContextManager(),
});

const exporter = new AzureMonitorLogExporter({
  connectionString:
    process.env["APPLICATIONINSIGHTS_CONNECTION_STRING"] || "InstrumentationKey=23ecbfe6-454f-4119-85df-8fb68b11b2b1;IngestionEndpoint=https://eastus2-3.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus2.livediagnostics.monitor.azure.com/",
});

const logRecordProcessor = new BatchLogRecordProcessor(exporter);
const loggerProvider = new LoggerProvider();
loggerProvider.addLogRecordProcessor(logRecordProcessor);

logs.setGlobalLoggerProvider(loggerProvider);

registerInstrumentations({
  instrumentations: [new DocumentLoadInstrumentation()],
});

logger.error('This is an error message.');

console.error('This is a console error message.');

console.log('This is a log message')

console.info('This is some information') 

console.error('This is an error')

console.warn('This is a warning') 