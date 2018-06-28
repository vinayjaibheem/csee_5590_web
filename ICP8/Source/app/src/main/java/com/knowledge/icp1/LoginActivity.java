package com.knowledge.icp1;

import android.app.Activity;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class LoginActivity extends Activity {

    EditText User, Pass;
    String userName;
    String password;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
    }

    public void checkCredentials(View view){
        User = (EditText)findViewById(R.id.textEdit);
        Pass = (EditText)findViewById(R.id.textPassword);

        userName = User.getText().toString();
        password = Pass.getText().toString();

        if(!userName.isEmpty() && !password.isEmpty()){
            if(userName.equals("Admin") && password.equals("Admin")){
                Toast.makeText(getApplicationContext(), "Successfully logged in", Toast.LENGTH_SHORT).show();
            }
            else
                Toast.makeText(getApplicationContext(), "Invalid credentials", Toast.LENGTH_SHORT).show();
        }
        else
            Toast.makeText(getApplicationContext(), "Enter credentials", Toast.LENGTH_SHORT).show();
    }
}
