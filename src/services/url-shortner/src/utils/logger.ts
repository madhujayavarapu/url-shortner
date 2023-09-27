import pino from 'pino';

const customLevels = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60,
};

export const logger = pino({
  customLevels,
  // TODO: Read from env variable.
  level: 'info',
  useOnlyCustomLevels: true,
  timestamp: () => {
    return ',"ts": ' + '"' + new Date().toISOString() + '"';
  },
  formatters: {
    level: (label: string, _: number) => ({ level: label.toUpperCase() }),
  },
});

export const buildLogger = (logger, attrs) => {
  return logger.child(attrs);
};

// TODO: try to add logger in the request obj by necessary info - Check feasibility.
export const log = buildLogger(logger, { app_name: 'url-shortner' });
