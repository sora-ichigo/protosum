// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var feature_feature_api_pb = require('../feature/feature_api_pb.js');

function serialize_feature_featureApiPb_Feature(arg) {
  if (!(arg instanceof feature_feature_api_pb.Feature)) {
    throw new Error('Expected argument of type feature.featureApiPb.Feature');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_feature_featureApiPb_Feature(buffer_arg) {
  return feature_feature_api_pb.Feature.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_feature_featureApiPb_Point(arg) {
  if (!(arg instanceof feature_feature_api_pb.Point)) {
    throw new Error('Expected argument of type feature.featureApiPb.Point');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_feature_featureApiPb_Point(buffer_arg) {
  return feature_feature_api_pb.Point.deserializeBinary(new Uint8Array(buffer_arg));
}


var FeatureServiceService = exports.FeatureServiceService = {
  getFeature: {
    path: '/feature.featureApiPb.FeatureService/GetFeature',
    requestStream: false,
    responseStream: false,
    requestType: feature_feature_api_pb.Point,
    responseType: feature_feature_api_pb.Feature,
    requestSerialize: serialize_feature_featureApiPb_Point,
    requestDeserialize: deserialize_feature_featureApiPb_Point,
    responseSerialize: serialize_feature_featureApiPb_Feature,
    responseDeserialize: deserialize_feature_featureApiPb_Feature,
  },
};

exports.FeatureServiceClient = grpc.makeGenericClientConstructor(FeatureServiceService);
