# CTRL+F5 to refresh css style on a website !!!!!!!
from flask import Flask, g
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    # return 'Cześć, tu Python!'
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
# I would create a div in each cell with an id and an onclick function.
#
# Maybe you could do something like
#
# var a =1 ;
#
# function dosomething(){
# if(a=1){
#    document.getElementById('').innerHTML='x';
# }else{
#    document.getElementById('').innerHTML='O';
# }
# a=0;
# }