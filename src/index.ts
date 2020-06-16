export enum Status {
    Success = 'success',
    Error = 'error',
    InProgress = 'in_progress'
}
export type Value = [number, string];

export type Metric = {
    name: string;
}

export interface DataItem {
    metric: Metric;
    values: Array<Value>;
}

export type Data = Array<DataItem>;

export interface LabResult {
    name: string;
    startTime: string;
    endTime?: string;
    status: Status;

    data: Data;

    errorType?: string;
    error?: string;
    warnings?: Array<string>;
}

export interface Labels {
    [key: string]: string;
}

export interface TestCaseInputConfig {
    logLevel: string;
    targetLabels?: Labels;
    port?: number;
}

export interface TestCase {
    start(): Promise<void>;
    result(): Promise<LabResult>;
}
