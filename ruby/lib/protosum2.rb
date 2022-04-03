# frozen_string_literal: true

require_relative "protosum2/version"

Dir.glob("#{__dir__}/**/*_pb.rb").each {|file| require file}

module Protosum2
  class Error < StandardError; end
  # Your code goes here...
end
