Backend:
python3 -m venv .venv # create venv
source .venv/bin/activate
pip install -r requirements.txt

Run server: 
python server.py


Frontend:
Install npm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm install --lts
nvm use --lts
node -v
npm -v


npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev