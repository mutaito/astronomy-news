#docker run -it --rm astronomy-news sh
sudo docker build -t astronomy-news . 
sudo docker run -p 5000:5000 astronomy-news