class Student {
    constructor (name, age, dateOfBirth, gender, studentId){
        this._name = name;
        this._age = age;
        this._dateOfBirth = dateOfBirth;
        this._gender = gender;
        this.studentId = studentId;
        this.hobbies = [];
    }
  
    set Name (name){
        this._name = name; //= `Nama Murid : ${name}.`;
    }
  
    set Age (age){
        this._age = age; //= `Usia Murid : ${age} tahun.`;
    }
  
    set DateOfBirth (dateOfBirth){
        this._dateOfBirth = dateOfBirth;//= `TTL : ${dateOfBirth}.`;
    }
  
    set Gender (gender){
      if(gender === 'Male' || gender === 'Female'){
        this._gender = gender;
      } else {
        this._gender = 'Masukkan gender yang benar!';
      }
    }
  
    addId (id){
      this.studentId = id; //= `id card : ${id}`;
    }
  
    addHobby (hobbies){
      this.hobbies.push(hobbies);
    }
  
    removeHobby (hobbies){
      //console.log(this.hobbies.length)
      //console.log(this.hobbies[1]);
      let remove = [];
      for(let i=0; i<=this.hobbies.length; i++){
        if(this.hobbies[i] !== hobbies){
          remove.push(this.hobbies[i]);
        } else {
          continue;
        }
      }
      this.hobbies = [];
      this.hobbies.push(remove);
      //console.log(remove);
    }
  
    get Data (){
      return `Nama : ${this._name}, 
      Umur : ${this._age} tahun, 
      TTL : ${this._dateOfBirth},
      Gender : ${this._gender},
      No Id : ${this.studentId},
      Hobby : ${this.hobbies}.`
    }
  
  
  } 
  
  //const Yonkou = new Student('Kaido', '1000', '28 Agustus 93', 'apa');
  const Yonkou = new Student();
  Yonkou.Name = 'Kaido'; 
  Yonkou.Age = '1000';
  Yonkou.DateOfBirth = '28 Aug 1993';
  Yonkou.Gender = 'Male';
  
  Yonkou.addId('yonkou01010101');
  
  Yonkou.addHobby('membunuh');
  Yonkou.addHobby('menyerang');
  Yonkou.addHobby('membajak');
  console.log(Yonkou);
  console.log(Yonkou.Data);
  
  Yonkou.removeHobby('menyerang');
  console.log(Yonkou);
  console.log(Yonkou.Data);
  
  //console.log(Yonkou.hobbies.length)
  //console.log(Yonkou._name);
  //console.log(Yonkou._age);
  //console.log(Yonkou._dateOfBirth);
  //console.log(Yonkou._gender);
  //console.log(Yonkou.studentId);
  //console.log(Yonkou.hobbies);
  