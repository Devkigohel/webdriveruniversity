package CucumberFramework.steps;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import static org.junit.Assert.*;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class Practicesteps {
	WebDriver driver;

	@Before()

	public void setupFF() {

		System.setProperty("webdriver.gecko.driver", "C:\\Users\\DEVIKA\\Desktop\\WebDriveuni\\CucumberFramework\\src\\test\\java\\CucumberFramework\\resorces\\geckodriver.exe");
		this.driver = new FirefoxDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
}

	@After()

	public void teardown() throws Throwable {
		Thread.sleep(3000);
		driver.manage().deleteAllCookies();
		driver.close();
		driver.quit();
}

	@Given("^user navigates to \"([^\"]*)\"$")
	public void user_navigates_to(String url) throws Throwable {
		driver.get(url);
}

	@When("^user clicks on the login portal button$")
	public void user_clicks_on_the_login_portal_button() throws Throwable {
	 driver.findElement(By.cssSelector("#login-portal > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)")).click();
}

	@Given("^user enters \"([^\"]*)\" username$")
	public void user_enters_username(String username) throws Throwable {
        for (String windHandle : driver.getWindowHandles()) {
            driver.switchTo().window(windHandle);
        }
        Thread.sleep(2000); //deelete if it doesn't work
        //driver.findElement(By.id("text")).sendKeys(username); 
        driver.findElement(By.xpath("//input[@id='text']")).sendKeys(username);
}

	@Given("^user enters \"([^\"]*)\"$")
	public void user_enters(String password) throws Throwable {
		driver.findElement(By.id("password")).sendKeys(password);
}
	
	@When("^user clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Throwable {
		driver.findElement(By.id("login-button")).click();
	}

	@Then("^the user should be prompted with the following prompt alert \"([^\"]*)\"$")
	public void the_user_should_be_prompted_with_the_following_prompt_alert(String message) throws Throwable {
		Alert alert = driver.switchTo().alert();
		assertEquals(alert.getText().toString().toLowerCase().replaceAll("\\s", ""), message.toLowerCase().replaceAll("\\s", ""));
		//replace followed by reg ex for replace any space with "" - guess this means no spaces?
		alert.accept();	
	}


}


	






	



	



	



	
