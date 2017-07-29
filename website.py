import cherrypy

from jinja2 import Environment, FileSystemLoader
from graphs.graph_factory import  create_bar_graph

env = Environment(loader=FileSystemLoader('res/templates'))


class PybanaWebsite:
    @cherrypy.expose
    def index(self):
        tmpl = env.get_template('index.html')
        myplot = create_bar_graph([100, 254, 23, 56, 23, 678], ["a", "b", "c", "d", "e", "f"])
        return tmpl.render(title="Welcome to PyBana", plot=myplot)


cherrypy.quickstart(PybanaWebsite())