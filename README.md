Frontend Setup
Navigate to the frontend directory:
cd brain-V1

Install dependencies:
npm install

Start the development server:
npx prisma generate 
npm run dev

The frontend will be running at http://localhost:3000

Backend Setup
Navigate to the backend directory:
cd brainAI

Create a virtual environment (Windows):
python -m venv venv

Activate the virtual environment:
.\venv\Scripts\activate

Allow script execution (Windows only, one-time step):
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

Install backend dependencies:
pip install -r requirements.txt

Run the backend server:
python run.py

The backend will be running at http://localhost:5000
