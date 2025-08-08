## Backend:
python3 -m venv .venv # create venv
source .venv/bin/activate
pip install -r requirements.txt

# Run backend server: 
python server.py


## Frontend:
# Install npm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm install --lts
nvm use --lts
node -v
npm -v

# start frontend
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev



# Deploy to GCP
gcloud auth login
gcloud config set project sample-website-468413 # use correct project ID
gcloud services enable run.googleapis.com
gcloud services enable artifactregistry.googleapis.com
gcloud services enable cloudbuild.googleapis.com

gcloud builds submit --tag gcr.io/sample-website-468413/flask-backend
gcloud run deploy flask-backend \
  --image gcr.io/sample-website-468413/flask-backend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated

# Access backend like below
curl https://flask-backend-625384235966.us-central1.run.app/api/message