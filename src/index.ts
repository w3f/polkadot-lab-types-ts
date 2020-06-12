export type Status = 'success' | 'error' | 'in_progress';

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
    endTime: string;
    status: Status;

    data: Data;

    errorType?: string;
    error?: string;
    warnings?: Array<string>;
}

export interface TestCase {
    start(): Promise<void>;
    result(): Promise<LabResult>;
}
