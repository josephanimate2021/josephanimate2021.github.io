# Install Redrawn
wget https://github.com/RedrawnWrapper/Redrawn/archive/chromebook.zip
# Extract Zip
unzip chromebook.zip
# Delete zip after extraction
unlink chromebook.zip
# Install Redrawn's Dependicies
cd Redrawn-chromebook/wrapper
npm install
# Start Redrawn
flashpeek-slimjet http://localhost:4343/
npm start
