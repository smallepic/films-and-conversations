require 'rack/rewrite'
require 'rack/jekyll'

use Rack::Rewrite do
  rewrite /\/(.+)/, "$1.html"
end

run Rack::Jekyll.new
