const os=require ('os');
console.log("CPU Architecture:" +os.arch());//CPU Architecture:x64
console.log("Free Memory:" +os.freemem());//Free Memory:145420288
console.log("Total Memory:" +os.totalmem());//Total Memory:4022984704


// console.log("Network Interfaces:" +JSON.stringify(os.networkInterfaces()));

console.log("OS default temp dir:" +os.tmpdir());
// OS default temp dir:C:\Users\hp\AppData\Local\Temp

console.log("OS Endianess:" +os.endianness());
//OS Endianess:LE
console.log("OS HostName:" +os.hostname());
//OS HostName:LAPTOP-5624ABQV
console.log("OS Type:" +os.type());
//OS Type:Windows_NT
console.log("OS Platfrom:" +os.platform());
//OS Platfrom:win32
console.log("OS Release:" +os.release());
//OS Release:10.0.19045