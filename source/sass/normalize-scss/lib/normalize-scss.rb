project_path     = File.join(File.dirname(__FILE__), '..')
stylesheets_path = File.join(project_path, 'sass')

if ENV.has_key?('SASS_PATH')
  ENV['SASS_PATH'] = ENV['SASS_PATH'] + File::PATH_SEPARATOR + stylesheets_path
else
  ENV['SASS_PATH'] = stylesheets_path
end
