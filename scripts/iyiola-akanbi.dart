void main() {
  print(MyTask().submit());
}
class MyTask{
  final name = "Iyiola Akanbi";
  final id = "HNG-00391";
  final email = "iyiola.dev@gmail.com";
  final language = "Dart";
   submit(){
    return 'Hello World, this is $name with HNGi7 $id and email $email using $language for stage 2 task.';
  }
}
