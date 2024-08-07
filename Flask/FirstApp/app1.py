from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# In-memory user store (for demo purposes)
users = {"user@eg.com": "123"}

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/name')
def hello_name():
    return 'Pratik Kumar Dewan'

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        if email in users and users[email] == password:
            return redirect(url_for('index'))
        else:
            return 'Invalid credentials, please try again.'
    return render_template('login.html')

@app.route('/home')
def home():
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True, port=5000)
