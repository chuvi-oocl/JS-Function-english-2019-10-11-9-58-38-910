function palindrome(message){
  // wirte your code here
  var messageArr = message.split("");
  for(var i=0; i<messageArr.length+1;i++){
    if(messageArr[i]!=messageArr[messageArr.length-i-1]){
      return false;
    }
  }
  return true
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true

