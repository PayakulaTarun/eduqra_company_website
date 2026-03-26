import 'package:flutter/material.dart';

class EduqraApp extends StatelessWidget {
  const EduqraApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Eduqra',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const Scaffold(
        body: Center(child: Text('Eduqra Learning Platform')),
      ),
    );
  }
}
