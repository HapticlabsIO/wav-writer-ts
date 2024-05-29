interface InputData {
    sampleRate: number;
    channelData: Float32Array[];
}
interface Options {
    floatingPoint?: boolean;
    float?: boolean;
    bitDepth?: number;
    symmetric?: boolean;
}
declare function encodeSync(inputData: InputData, opts?: Options): ArrayBuffer;
declare function encode(inputData: InputData, opts: Options): Promise<ArrayBuffer>;
declare const _default: {
    encode: typeof encode;
    encodeSync: typeof encodeSync;
};
export default _default;
