from flask import Flask, request, jsonify
from utils import extract_text_from_video

app = Flask(__name__)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@app.route('/api/extract-text', methods=['POST'])
def extract_text():
    video_url = request.json['videoUrl']
    extracted_text = extract_text_from_video(video_url)
    return jsonify({'extractedText': extracted_text})

if __name__ == '__main__':
    app.run(debug=True)