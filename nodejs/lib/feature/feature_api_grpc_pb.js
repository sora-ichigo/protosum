// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var feature_feature_api_pb = require('../feature/feature_api_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_feature_feature_api_pb_Feature(arg) {
  if (!(arg instanceof feature_feature_api_pb.Feature)) {
    throw new Error('Expected argument of type feature.feature_api_pb.Feature');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_feature_feature_api_pb_Feature(buffer_arg) {
  return feature_feature_api_pb.Feature.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_feature_feature_api_pb_Point(arg) {
  if (!(arg instanceof feature_feature_api_pb.Point)) {
    throw new Error('Expected argument of type feature.feature_api_pb.Point');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_feature_feature_api_pb_Point(buffer_arg) {
  return feature_feature_api_pb.Point.deserializeBinary(new Uint8Array(buffer_arg));
}


var FeatureServiceService = exports.FeatureServiceService = {
  getFeature: {
    path: '/feature.feature_api_pb.FeatureService/GetFeature',
    requestStream: false,
    responseStream: false,
    requestType: feature_feature_api_pb.Point,
    responseType: feature_feature_api_pb.Feature,
    requestSerialize: serialize_feature_feature_api_pb_Point,
    requestDeserialize: deserialize_feature_feature_api_pb_Point,
    responseSerialize: serialize_feature_feature_api_pb_Feature,
    responseDeserialize: deserialize_feature_feature_api_pb_Feature,
  },
  getFeatures: {
    path: '/feature.feature_api_pb.FeatureService/GetFeatures',
    requestStream: false,
    responseStream: false,
    requestType: feature_feature_api_pb.Point,
    responseType: feature_feature_api_pb.Feature,
    requestSerialize: serialize_feature_feature_api_pb_Point,
    requestDeserialize: deserialize_feature_feature_api_pb_Point,
    responseSerialize: serialize_feature_feature_api_pb_Feature,
    responseDeserialize: deserialize_feature_feature_api_pb_Feature,
  },
};

exports.FeatureServiceClient = grpc.makeGenericClientConstructor(FeatureServiceService);
