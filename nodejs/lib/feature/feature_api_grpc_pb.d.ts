// package: feature.feature_api_pb
// file: feature/feature_api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as feature_feature_api_pb from "../feature/feature_api_pb";

interface IFeatureServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getFeature: IFeatureServiceService_IGetFeature;
    getFeatures: IFeatureServiceService_IGetFeatures;
}

interface IFeatureServiceService_IGetFeature extends grpc.MethodDefinition<feature_feature_api_pb.Point, feature_feature_api_pb.Feature> {
    path: "/feature.feature_api_pb.FeatureService/GetFeature";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<feature_feature_api_pb.Point>;
    requestDeserialize: grpc.deserialize<feature_feature_api_pb.Point>;
    responseSerialize: grpc.serialize<feature_feature_api_pb.Feature>;
    responseDeserialize: grpc.deserialize<feature_feature_api_pb.Feature>;
}
interface IFeatureServiceService_IGetFeatures extends grpc.MethodDefinition<feature_feature_api_pb.Point, feature_feature_api_pb.Feature> {
    path: "/feature.feature_api_pb.FeatureService/GetFeatures";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<feature_feature_api_pb.Point>;
    requestDeserialize: grpc.deserialize<feature_feature_api_pb.Point>;
    responseSerialize: grpc.serialize<feature_feature_api_pb.Feature>;
    responseDeserialize: grpc.deserialize<feature_feature_api_pb.Feature>;
}

export const FeatureServiceService: IFeatureServiceService;

export interface IFeatureServiceServer extends grpc.UntypedServiceImplementation {
    getFeature: grpc.handleUnaryCall<feature_feature_api_pb.Point, feature_feature_api_pb.Feature>;
    getFeatures: grpc.handleUnaryCall<feature_feature_api_pb.Point, feature_feature_api_pb.Feature>;
}

export interface IFeatureServiceClient {
    getFeature(request: feature_feature_api_pb.Point, callback: (error: grpc.ServiceError | null, response: feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
    getFeature(request: feature_feature_api_pb.Point, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
    getFeature(request: feature_feature_api_pb.Point, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
    getFeatures(request: feature_feature_api_pb.Point, callback: (error: grpc.ServiceError | null, response: feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
    getFeatures(request: feature_feature_api_pb.Point, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
    getFeatures(request: feature_feature_api_pb.Point, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
}

export class FeatureServiceClient extends grpc.Client implements IFeatureServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getFeature(request: feature_feature_api_pb.Point, callback: (error: grpc.ServiceError | null, response: feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
    public getFeature(request: feature_feature_api_pb.Point, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
    public getFeature(request: feature_feature_api_pb.Point, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
    public getFeatures(request: feature_feature_api_pb.Point, callback: (error: grpc.ServiceError | null, response: feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
    public getFeatures(request: feature_feature_api_pb.Point, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
    public getFeatures(request: feature_feature_api_pb.Point, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
}
