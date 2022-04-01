// package: postpb
// file: post.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Post extends jspb.Message { 
    getName(): string;
    setName(value: string): Post;
    getType(): number;
    setType(value: number): Post;
    getUserName(): number;
    setUserName(value: number): Post;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Post.AsObject;
    static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Post;
    static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
    export type AsObject = {
        name: string,
        type: number,
        userName: number,
    }
}
