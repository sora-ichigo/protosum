require "proto/version"

Dir.glob("#{__dir__}/**/*_pb.rb").each {|file| require file}

module Protosum
  class Error < StandardError; end
  # Your code goes here...
end
