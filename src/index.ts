export enum Status {
    Success = 'success',
    Error = 'error',
    InProgress = 'in_progress'
}

export type Value = [string, string];

export type Metric = {
    [labelName: string]: string;
}

export interface DataItem {
    metric?: Metric;
    value: Value;
}

export type Data = Array<DataItem>;

export interface LabResult {
    name: string;
    startTime: string;
    endTime?: string;
    description?: string;

    status: Status;

    data: Data;

    errorType?: string;
    error?: string;
    warnings?: Array<string>;
}

export interface Labels {
    [key: string]: string;
}

export interface PrometheusConfig {
    name: string;
    metric: string;
    period: number;
}

export interface TestCaseInputConfig {
    logLevel: string;
    targetLabels?: Labels;
    port?: number;
    prometheus: PrometheusConfig;
    extra?: any;
}

export interface TestCase {
    start(): Promise<void>;
    result(): Promise<LabResult>;
}
