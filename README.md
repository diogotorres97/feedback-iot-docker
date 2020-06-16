# feedback-iot-docker

The stack used in a user study to validate my dissertation concerning the Increasing of feedback in IoT development, more specifically in Node-RED.


## Containers description
- **nginx** container is used as a reverse proxy to the other containers, abstracting the existence of other internal services.
- **validation-web** 
- The **original Node-RED**
- The **enhanced Node-RED**
- The **sensor/actuator simulator** 
- A **Mosquitto** broker.

### Folders Overview

| Section | Description | 
|:-:|:-|
| __configs__ | Nginx reverse-proxy and security configuration.  |
| __flows__ | The flows used in validation, as well as some simple flows.  |
| __validation-web__ | hosts a simple web page to facilitate the verification requests process (with a page to check the correctness of the flows and the available guide) |

## Instructions

Note: Docker and Docker-compose are assumed that are already installed.

1. `git clone git@github.com:diogotorres97/feedback-iot.git`
2. `cd feedback-iot-docker`
3. `git clone git@github.com:diogotorres97/nodered-cauldron.git`
4. `git clone git@github.com:diogotorres97/simulator-iot-devices.git`
5. `docker-compose up`

## How to use Node-RED

1. Access the original version at `http://localhost/nodered` or  the enhanced one at `http://localhost/cauldron`
1. Import flows from `flows` folder
 * `simple.json` - Simple flow where are injected random mensagens to handle an heat system
 * `mqtt.json` - Simple flow that subscribes and publishes topics to handle an heat system
3. Deploy

## How to use the sensor/actuator simulator through web page

1. Access `http://localhost/validation`
2. Some buttons will be available to test specific scenarios

More information about the simulator's use is available: `https://github.com/diogotorres97/simulator-iot-devices`