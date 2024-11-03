from youtube_transcript_api import YouTubeTranscriptApi

def extract_text_from_video(video_url):
    video_id = video_url.split("=")[1]
    transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)
    transcript = transcript_list.find_transcript(['ru', 'en'])
    transcript.fetch()
    transcript = transcript.fetch()
    return''.join([entry['text'] for entry in transcript])