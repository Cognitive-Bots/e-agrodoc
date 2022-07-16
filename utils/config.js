const ip = "192.168.1.4";
const auth_port = 1111;
const upload_port = 8010;
const flask1_port = 8012;
const flask2_port = 8016;
const config = {
  auth_ip: `http://${ip}:${auth_port}/`,
  upload_ip: `http://${ip}:${upload_port}/`,
  flask1_ip: `http://${ip}:${flask1_port}/image`,
  flask2_ip: `http://${ip}:${flask2_port}/crop_recommendation`,
};

export default config;
