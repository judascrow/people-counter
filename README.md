# people-counter

- Install all the required Python dependencies:

```
pip install -r requirements.txt
```

- To run inference on a test video file, head into the directory/use the command:

```
python people_counter.py --prototxt mobilenet_ssd/MobileNetSSD_deploy.prototxt --model mobilenet_ssd/MobileNetSSD_deploy.caffemodel --input videos/example_01.mp4 --output output/output_01.avi
```
