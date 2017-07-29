import cherrypy
from jinja2 import Environment, FileSystemLoader


env = Environment(loader=FileSystemLoader('res/templates'))


class PybanaWebsite:
    @cherrypy.expose
    def index(self):
        tmpl = env.get_template('index.html')
        return tmpl.render(title="PyBana")


cherrypy.quickstart(PybanaWebsite())