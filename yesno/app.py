from flask import Flask, jsonify, request, abort, send_from_directory
import os

app = Flask('yesno', static_folder="build/static")


@app.route('/api', methods=["POST"])
def index():
    json = request.get_json()
    try:
        question = json['question']
    except:
        abort(400)
    return jsonify({
        "answer": 'Yes' if hash(question) % 2 == 0 else 'No'
    })


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if(path == ""):
        return send_from_directory('build', 'index.html')
    else:
        if(os.path.exists("build/" + path)):
            return send_from_directory('build', path)
        else:
            return send_from_directory('build', 'index.html')


if __name__ == '__main__':
    app.run( debug=True)
