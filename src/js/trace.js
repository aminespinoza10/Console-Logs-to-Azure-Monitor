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
    process.env["APPLICATIONINSIGHTS_CONNECTION_STRING"] || "App Inisghts connection string here",
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