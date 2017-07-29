import plotly.offline as ploff
import plotly.graph_objs as plobs


def create_bar_graph(data, labels):
    plotdata = [plobs.Bar(x=labels, y=data)]

    layout = plobs.Layout(
        autosize=True
    )

    fig = plobs.Figure(data=plotdata, layout=layout)
    myplot = ploff.plot(fig, output_type="div")
    return myplot
