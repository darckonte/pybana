import plotly.offline as ploff
import plotly.graph_objs as plobs


def create_bar_graph(data, labels):
    plot_div = ploff.plot({
        'data': [
            plobs.Bar(x=labels, y=data)]},
        output_type='div', show_link=False)
    return plot_div