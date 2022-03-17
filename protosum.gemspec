
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "protosum/version"

Gem::Specification.new do |spec|
  spec.name          = "protosum"
  spec.version       = "0.3.0"
  spec.authors       = ["igsr5"]
  spec.email         = ["i@gsr5.dev"]

  spec.summary       = %q{igsr5's test package.}
  spec.description   = %q{igsr5's test package for proto buf}
  spec.homepage      = "https://github.com/igsr5/protosum"

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    spec.metadata["allowed_push_host"] = "https://rubygems.org"

    spec.metadata["homepage_uri"] = spec.homepage
    spec.metadata["source_code_uri"] = "https://github.com/igsr5/protosum"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files         = Dir.chdir(File.expand_path('..', __FILE__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["ruby"]

  spec.add_development_dependency "bundler", "~> 1.17"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"
  spec.add_dependency "google-protobuf", "~> 3.14"
  spec.add_dependency "grpc", "~> 1.28"
  spec.add_development_dependency "grpc-tools", "~> 1.27"
  spec.add_development_dependency "bump", "~> 0.10.0"
end
