
// class alert {
//   constructor (type, level){
//     this.type = type;
//     this.level = level;
//     this.location = new location ();
//     this.id = Math.random().toString(36).substring(2,9);
//   }  

//   getType(){return this.type;}
//   getId(){return this.id;}
//   getlevel(){return this.level;}
//   getlocation(){return this.location}
// }

// class hazardAlertSystem {
//     constructor (){
//         this.alerts =[];
//         this.users =[];
//     }

//     reportHazard(user){
//         this.users.push(user);
//     }

//     resolveHazard(user){
//         this.users = this.user.filter(user => user !== users);
//     }

//     notify(alert){
//         this.user.forEach(user => user.update(alert));
//     }

//     createAlert(message, type){
//         const alert = new Alert(message, type);
//         this.alerts.push(alert);
//         this.notify(alert);
//         return alert;
//     }
// }

// class notification{
//     constructor (displayId){
//         this.display = document.getElementById(displayId);
//         if(!display){
//             throw new Error('display Element not found');
//         }
//     }

//     shedule(alert){
//         this.renderAlert(alert);
//     }

//     renderAlert (alert){
//         const alertElement = document.createElement('div');
//         alertElement.className = `alert alert-${alert.getType()}`;
//         alertElement.id = `alert-${alert.getId()}`;
//     }


//        alertElement.innerHTML = `<strong>${alert.getType().toUpperCase()}:</strong>  ${alert.getMessage()}
//         <button onclick="this.parentElement.remove()"> × </button> `;

//         this.display.appendChild(alertElement);

        
//         setTimeout(() => {
//             this.removeAlert(alert.getId());
//         }, 5000);

//         removeAlert(id){
//             const alertElement = document.getElementById(`alert-${id}`);
//             if (alertElement) {
//                 alertElement.remove();
//             }
//         };
    
// }


// const hazardAlertSystem = new hazardAlertSystem();
// const user = new AlertUser();
// const notification = new AlertNotification('Alerts-display');


// hazardAlertSystem.createAlert('alerted!', 'success');
// hazardAlertSystem.createAlert('Warning-Low memory', 'Warning');
// hazardAlertSystem.createAlert('failed to connect', 'Error');

class Alert {
    static totalAlerts = 0; 
  
    constructor(type, level, location) {
      this.type = type;
      this.level = level;
      this.location = location;
      this.id = Math.random().toString(36).substring(2, 9);
      Alert.totalAlerts++; 
    }
  
    
    getType() {
      return this.type;
    }
  
    getId() {
      return this.id;
    }
  
    getLevel() {
      return this.level;
    }
  
    getLocation() {
      return this.location;
    }
  
    static getTotalAlerts() {
      return Alert.totalAlerts;
    }
  }
  
  class User {
    static totalUsers = 0; 
  
    constructor(name, contactInfo, location) {
      this.name = name;
      this.contactInfo = contactInfo;
      this.location = location;
      this.id = Math.random().toString(36).substring(2, 9);
      User.totalUsers++; 
    }
  
    receiveNotification(alert) {
      console.log(
        `Notification for ${this.name}: ${alert.getType()} alert at ${alert.getLocation()}`
      );
    }
  
    getUserDetails() {
      return { id: this.id, name: this.name, contact: this.contactInfo };
    }
  
    static getTotalUsers() {
      return User.totalUsers;
    }
  }
  
  class HazardAlertSystem {
    constructor() {
      this.alerts = [];
      this.users = [];
    }
  

    reportHazard(type, level, location) {
      const alert = new Alert(type, level, location);
      this.alerts.push(alert);
      this.notifyUsers(alert);
      return alert;
    }
  
    resolveHazard(alertId) {
      this.alerts = this.alerts.filter((alert) => alert.getId() !== alertId);
    }
  
    notifyUsers(alert) {
      this.users.forEach((user) => user.receiveNotification(alert));
    }
  
    registerUser(user) {
      this.users.push(user);
    }
  
    
    static systemInfo() {
      return "Hazard Alert System v1.0";
    }
  }
  
  class Notification {
    static notificationCount = 0;
  
    constructor(displayId) {
      this.display = document.getElementById(displayId);
      if (!this.display) {
        throw new Error("Display element not found");
      }
    }
  
  
    schedule(alert) {
      this.renderAlert(alert);
    }
  
    renderAlert(alert) {
      const alertElement = document.createElement("div");
      alertElement.className = `alert alert-${alert.getType()}`;
      alertElement.id = `alert-${alert.getId()}`;
  
      alertElement.innerHTML = `<strong>${alert
        .getType()
        .toUpperCase()}:</strong> ${alert.getLevel()} alert at ${
        alert.getLocation()
      }
          <button onclick="this.parentElement.remove()">×</button>`;
  
      this.display.appendChild(alertElement);
  
      setTimeout(() => {
        this.removeAlert(alert.getId());
      }, 5000);
    }
  
    removeAlert(id) {
      const alertElement = document.getElementById(`alert-${id}`);
      if (alertElement) {
        alertElement.remove();
      }
    }
  
    // Static method
    static getNotificationCount() {
      return Notification.notificationCount;
    }
  }
  
  // Example Usage
  const hazardAlertSystem = new HazardAlertSystem();
  console.log(HazardAlertSystem.systemInfo());
  
  const user1 = new User("Somto", "somto@gmail.com", "Agbani Road");
  const user2 = new User("Kelvin", "bob@gmail.com", "Trans Ekulu");
  
  hazardAlertSystem.registerUser(user1);
  hazardAlertSystem.registerUser(user2);
  
  const alert1 = hazardAlertSystem.reportHazard("Fire", "High", "Ogui Junction");
  const alert2 = hazardAlertSystem.reportHazard("Flood", "Moderate", "Gariki");
  
  console.log(`Total Alerts: ${Alert.getTotalAlerts()}`);
  console.log(`Total Users: ${User.getTotalUsers()}`);
  