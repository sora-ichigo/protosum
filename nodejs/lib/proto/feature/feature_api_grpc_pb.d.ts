// package: feature.feature_api_pb
// file: proto/feature/feature_api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_feature_feature_api_pb from "../../proto/feature/feature_api_pb";

interface IFeatureServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getFeature: IFeatureServiceService_IGetFeature;
}

interface IFeatureServiceService_IGetFeature extends grpc.MethodDefinition<proto_feature_feature_api_pb.Point, proto_feature_feature_api_pb.Feature> {
    path: "/feature.feature_api_pb.FeatureService/GetFeature";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_feature_feature_api_pb.Point>;
    requestDeserialize: grpc.deserialize<proto_feature_feature_api_pb.Point>;
    responseSerialize: grpc.serialize<proto_feature_feature_api_pb.Feature>;
    responseDeserialize: grpc.deserialize<proto_feature_feature_api_pb.Feature>;
}

export const FeatureServiceService: IFeatureServiceService;

export interface IFeatureServiceServer extends grpc.UntypedServiceImplementation {
    getFeature: grpc.handleUnaryCall<proto_feature_feature_api_pb.Point, proto_feature_feature_api_pb.Feature>;
}

export interface IFeatureServiceClient {
    getFeature(request: proto_feature_feature_api_pb.Point, callback: (error: grpc.ServiceError | null, response: proto_feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
    getFeature(request: proto_feature_feature_api_pb.Point, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
    getFeature(request: proto_feature_feature_api_pb.Point, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
}

export class FeatureServiceClient extends grpc.Client implements IFeatureServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getFeature(request: proto_feature_feature_api_pb.Point, callback: (error: grpc.ServiceError | null, response: proto_feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
    public getFeature(request: proto_feature_feature_api_pb.Point, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
    public getFeature(request: proto_feature_feature_api_pb.Point, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_feature_feature_api_pb.Feature) => void): grpc.ClientUnaryCall;
}
