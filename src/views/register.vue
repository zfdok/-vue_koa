<template>
<van-form @submit="onSubmit">
  <div class="register_body">
    <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="goback" />
    <Card>
      <van-cell-group>
        <van-field
          v-model="username"
          placeholder="请输入用户名"
          label="用户名:"
          name="username"
          required
          right-icon="clear"
          @click-right-icon="username=''"
        />
        <van-field
          v-model="password"
          placeholder="请输入用密码"
          label="密码:"
          name="password"
          type="password"
          right-icon="clear"
          @click-right-icon="password=''"
          required
        />
        <div class="summit_btn">
          <van-button type="primary" 
          size="large"  
          round
           native-type="submit"
          >马上注册</van-button>
        </div>
      </van-cell-group>
    </Card>
  </div>
</van-form>
</template>

<script>
import Card from '../components/show/card_slot'
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components:{
    Card
  },
  created() {
    console.log("asdasdhaha");
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    onSubmit(value){
      console.log(value);
      
    }
  }
};
</script>

<style scope>
.register_body{
  background-color: #eee;
  height: 100%;
  width: 100%;
  position: absolute
}
.summit_btn{
  margin-top: 2rem;
}
</style>