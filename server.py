import csv
from flask import Flask, render_template, url_for, request, redirect

app = Flask(__name__)
print(__name__)


@app.route("/")
def hello():
    return render_template("./index.html")


@app.route("/<page_name>")
def page_route(page_name):
    return render_template(page_name)


#@app.route("/components.html")
#def components():
#   return render_template("components.html")
def write_to_csv(data):
    with open('database.csv', newline='', mode='a') as database2:
        email = data["email"]
        subject = data["subject"]
        message = data["message"]
        csv_writer = csv.writer(database2,
                                delimiter=",",
                                quotechar='"',
                                quoting=csv.QUOTE_MINIMAL)
        csv_writer.writerow([email, subject, message])


def write_to_file(data):
    with open('database.txt', mode='a') as database:
        email = data["email"]
        subject = data["subject"]
        message = data["message"]
        file = database.write(f'{email},{subject},{message}\n')


@app.route("/submit_form", methods=['POST', 'GET'])
def submit():
    if request.method == 'POST':
        try:
            data = request.form.to_dict()
            write_to_csv(data)
            return redirect("/thankyou.html")
        except:
            'did not save to database'
    else:
        return "something wen't wrong, try again."