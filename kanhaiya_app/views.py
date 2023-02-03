from django.shortcuts import render


# --------------- MAIN WEB PAGES -----------------------------

def index(request):

	return render(request, 'index.html')
	 