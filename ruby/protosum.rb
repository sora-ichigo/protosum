require "apis/version"
require "apis/constants"

Dir.glob("#{__dir__}/**/*_pb.rb").each {|file| require file}

module Protosum
  class Error < StandardError; end
  # Your code goes here...
end
